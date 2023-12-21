from flask import Flask, request, redirect, url_for, session, render_template
from flask_mysqldb import MySQL
import MySQLdb.cursors

app = Flask(__name__)

app.secret_key = 'secret_key'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'rootuser'
app.config['MYSQL_DB'] = 'spotify'

mysql = MySQL(app)

@app.route('/',methods=['GET'])
def home():
    return render_template('home.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username=request.form['username']
        email = request.form['email']
        password = request.form['password']

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        try:
            cursor.execute(
                "INSERT INTO users (username,email, password) VALUES (%s,%s, %s)", (username,email, password))

            mysql.connection.commit()
            return redirect(url_for('login'))
        except MySQLdb.IntegrityError as e:

            return render_template('signup.html', message="user exist")

    return render_template('signup.html',message="")

@app.route('/login',methods=['GET','POST'])
def login():
        if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
            email = request.form['email']
            password = request.form['password']

            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute('Select * from users where email = %s and password =%s', (email, password))
            user = cursor.fetchone()
            if user:
                if user['id']==1:
                    session['loggedin'] = True
                    session['email'] = user['email']
                    return render_template('admin_logged.html', message=user)

                else:
                    session['loggedin'] = True
                    session['email'] = user['email']
                    return render_template('spotify_logged.html', message=user)
            else:
                cursor.execute('Select * from users where email = %s', (email,))
                user=cursor.fetchone()
                if user:
                    message='invalid credentials'
                else:
                    message="user doesn't exist"

                return render_template('login.html', message=message)

        return render_template('login.html',message='')




@app.route('/resetpassword', methods=['GET', 'POST'])
def resetpassword():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        try:
            cursor.execute("update users set password=%s where email=%s",(password,email))
            mysql.connection.commit()
            return redirect(url_for('login'))
        except MySQLdb.IntegrityError as e:

            return render_template('singup.html')

    return render_template('forgot_password.html')

@app.route('/editprofile/<int:id>', methods=['GET','POST'])
def editprofile(id):
    if request.method=='GET':
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where id=%s',(id,))
        data = cursor.fetchone()
        if data!=None:
            return render_template('editprofile.html', message=data)

        return redirect(url_for('signup'))
    if request.method == 'POST':
        ID=id
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        country = request.form['country']
        dob=request.form['dob']
        gender=request.form['gender']
        try:
            terms=request.form['terms']
        except:
            terms=None

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(
            """ UPDATE users
            SET username=%s,password=%s,email=%s,gender=%s,country=%s,dob=%s,terms=%s where id=%s""",(username,password,email,gender,country,dob,terms,ID)
            )

        mysql.connection.commit()
        cursor.execute('select * from users where id=%s', (id,))
        data = cursor.fetchone()
        if data['id']==1:
            return render_template('admin_logged.html',message=data)
        else:
            return render_template('spotify_logged.html',message=data)

@app.route('/deleteaccount/<int:id>',methods=['GET'])
def deleteduser(id):
    if request.method == 'GET':
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where id=%s ', (id,))
        data = cursor.fetchone()
        if data != None:
            cursor.execute('delete from users where id=%s',(id,))
            mysql.connection.commit()
            return redirect(url_for('home'))
        return f'User with id {id} do not exist'
    
"""@app.route('/songs/<int:id>',methods=['GET'])
def songs(id):
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('select * from users where id=%s', (id,))
    data = cursor.fetchone()
    return render_template('songs_page.html', message=data)"""

@app.route('/songs/<int:id>',methods=['GET'])
def songs(id):
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('select * from users where id=%s', (id,))
    data_one= cursor.fetchone()
    cursor.execute('select * from songs')
    data_two=cursor.fetchall()
    return render_template('trail_songs.html', message1=data_one,message2=data_two)

@app.route('/adminsongs/<int:id>',methods=['GET'])
def adminsongs(id):
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('select * from users where id=%s', (id,))
    data_one= cursor.fetchone()
    cursor.execute('select * from songs')
    data_two=cursor.fetchall()
    return render_template('deletesongs.html', message1=data_one,message2=data_two)


@app.route('/addsong/<int:id>', methods=['GET', 'POST'])
def addsong(id):
    if id==1:
        if request.method == 'POST':
            title=request.form['title']
            album = request.form['album']
            date = request.form['date']
            duration=request.form['duration']

            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            try:
                cursor.execute(
                    "INSERT INTO songs (title,album,date_added,duration) VALUES (%s,%s, %s,%s)", (title,album,date,duration))

                mysql.connection.commit()
                cursor.execute('select * from users where id=1')
                table =cursor.fetchone()
                return render_template('addsongs.html',message=table)
            except MySQLdb.IntegrityError as e:

                return f"{e}"
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where id=1')
        table = cursor.fetchone()
        return render_template('addsongs.html', message=table)
    return redirect('\login')

@app.route('/deletesong/<int:id>',methods=['GET','POST'])
def deletesong(id):
    cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('delete from songs where id=%s',(id,))
    mysql.connection.commit()
    return redirect('\songs/1')

@app.route('/users',methods=['GET','POST'])
def users():
    if request.method == 'POST':
        id=request.form['userid']
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        country = request.form['country']
        dob=request.form['dob']
        gender=request.form['gender']
        try:
            terms=request.form['terms']
        except:
            terms=None

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(
            """ UPDATE users
            SET username=%s,password=%s,email=%s,gender=%s,country=%s,dob=%s,terms=%s where id=%s""",(username,password,email,gender,country,dob,terms,id)
            )

        mysql.connection.commit()
        cursor.execute('select * from users where id=1')
        data = cursor.fetchone()
        if data['id']==1:
            return render_template('admin_logged.html',message=data)
    if request.method=='GET':
        cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where not id=1')
        users=cursor.fetchall()
        if users:
            return render_template('users.html',messages=users)
    

    

@app.route('/back/<int:id>', methods=['GET'])
def back(id):
    if id==1:
        if request.method == 'GET':
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute('select * from users where id=%s', (id,))
            data = cursor.fetchone()
            return render_template('admin_logged.html', message=data)
    if request.method == 'GET':

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from users where id=%s', (id,))
        data = cursor.fetchone()
        return render_template('spotify_logged.html',message=data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(5001), debug=True)


  