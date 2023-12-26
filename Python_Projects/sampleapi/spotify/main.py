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
                session['loggedin'] = True
                session['email'] = user['email']
                session['id']=user['id']
                session['user']=user
                return redirect(url_for('mainpage'))
            else:
                cursor.execute('Select * from users where email = %s', (email,))
                user=cursor.fetchone()
                if user:
                    message='invalid credentials'
                else:
                    message="user doesn't exist"

                return render_template('login.html', message=message)

        return render_template('login.html',message='')

@app.route('/logout',methods=['GET','POST'])
def logout():
    session['loggedin']=False
    return redirect('/')


@app.route('/mainpage',methods=['GET','POST'])
def mainpage():
    if session.get('loggedin',False):
        user=session['user']
        if session['id'] == 1:
            return render_template('admin_logged.html', message=user)

        else:
            return render_template('spotify_logged.html', message=user)
    else:
        return redirect('/')

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

@app.route('/editprofile', methods=['GET','POST'])
def editprofile():
    if session.get('loggedin', False):
        id=session['id']
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

            try:
                cursor.execute(
                    """ UPDATE users
                    SET username=%s,password=%s,email=%s,gender=%s,country=%s,dob=%s,terms=%s where id=%s""",
                    (username, password, email, gender, country, dob, terms, ID)
                )

                mysql.connection.commit()
            except:
                cursor.execute('select * from users where id=%s', (id,))
                data = cursor.fetchone()
                return render_template('editprofile.html', message=data,message2="Email already taken")

            return redirect('mainpage')
    else:
        return redirect('/')

@app.route('/songs',methods=['GET'])
def songs():
    if session.get('loggedin', False):
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from songs')
        data=cursor.fetchall()
        return render_template('trail_songs.html', message=data)
    else:
        return redirect('/')
@app.route('/deleteaccount',methods=['GET'])
def deleteduser():
    if session.get('loggedin', False):
        id=session['id']
        if request.method == 'GET':
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute('select * from users where id=%s ', (id,))
            data = cursor.fetchone()
            if data != None:
                cursor.execute('delete from users where id=%s',(id,))
                mysql.connection.commit()
                return redirect(url_for('home'))
            return f'User with id {id} do not exist'
    else:
        return redirect('/')

@app.route('/deletesongs',methods=['GET'])
def deletesongs():
    if session.get('loggedin', False):
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from songs')
        data=cursor.fetchall()
        return render_template('deletesongs.html', message=data)
    else:
        return redirect('/')
@app.route('/deletesong/<int:id>',methods=['GET','POST'])
def deletesong(id):
    if session.get('loggedin', False):
        cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('delete from songs where id=%s',(id,))
        mysql.connection.commit()
        return redirect(url_for('deletesongs'))
    else:
        return redirect('/')
@app.route('/addsong', methods=['GET', 'POST'])
def addsong():
    if session.get('loggedin', False):
        id=session['id']
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
                    return render_template('addsongs.html')
                except MySQLdb.IntegrityError as e:

                    return f"{e}"
            return render_template('addsongs.html')
        return redirect('\login')
    else:
        return redirect('/')


@app.route('/users',methods=['GET','POST'])
def users():
    if session.get('loggedin', False):
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
                SET username=%s,password=%s,email=%s,gender=%s,country=%s,dob=%s,terms=%s where id=%s""",
                (username, password, email, gender, country, dob, terms, id)
            )
            mysql.connection.commit()

            return redirect('users')
        if request.method=='GET':
            cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute('select * from users where not id=1')
            users=cursor.fetchall()
            if users:
                return render_template('users.html',messages=users)

    else:
        return redirect('/')



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(5001), debug=True)


