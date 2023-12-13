from flask import Flask,jsonify,request

app=Flask(__name__)

@app.route('/',methods=['GET','POST'])


def my_function():
    if request.method=='GET':
        return jsonify(({'message':'Hello Srujan'}))
    elif request.method=='POST':
        data=request.get_json()
        return jsonify({'message':'hello, {}'.format(data['name'])})

@app.route('/login',methods=['GET','POST'])


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return jsonify({'message': 'logged In'})
    elif request.method == 'POST':
        data = request.get_json()
        return jsonify({'name': data['name'], 'password': data['password']})

if __name__ == '__main__':
    app.run(debug=True)





if __name__=='__main__':
    app.run(debug=True)



