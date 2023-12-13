from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

data=[
    {'id': 1,  'name': 'Bibin', 'phone': '1234567890'},
    {'id': 2,  'name': 'Nikhil', 'phone': '1234567890'},
    {'id': 3,  'name': 'Varsha', 'phone': '1234567890'},
    {'id': 4,  'name': 'Ziya', 'phone': '1234567890'},
    {'id': 5,  'name': 'Sridhar', 'phone': '1234567890'},
    {'id': 6,  'name': 'Srujan', 'phone': '1234567890'}
]

#RESTFUL APIs
@app.route('/all_users',methods=['GET'])
def get_users():
    """return jsonify(({'users': data}))"""
    return render_template('home.html',data=data)



def find_user(user_id):
    return next((user for user in data if user['id'] == user_id), None)

@app.route('/get_user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user=find_user(user_id)
    if user:
        return jsonify(({'user_details': user}))
    else:
        return jsonify({'message':'User not found'}), 404

@app.route('/add_user',methods=['POST'])
def add_user():
    user = request.get_json()
    new_user = {'id': len(data)+1, 'name': user['name'], 'phone': user['phone']}
    data.append(new_user)
    return jsonify({'message': 'User created','new_user_details':new_user}), 201

@app.route('/update_user/<int:user_id>',methods=['PUT'])

def update_user(user_id):
    user = find_user(user_id)
    if user:
        data = request.get_json()
        user['name'] = data['name']
        user['phone'] = data['phone']
        return ({'message': 'user updated','updated_user_details': data})
    else:
        return jsonify({'message':'User not found'}), 404

@app.route('/delete_user/<int:user_id>',methods=['DELETE'])
def delete_user(user_id):
    global data
    data = [user for user in data if user['id'] != user_id]
    return jsonify({'message':'User deleted'})

@app.route('/update_name/<int:user_id>',methods=['PATCH'])

def update_name(user_id):
    user = find_user(user_id)
    if user:
        data = request.get_json()
        user['name'] = data['name']
        return ({'message': 'user updated','updated_user_details': data})
    else:
        return jsonify({'message':'User not found'}), 404





















if __name__=='__main__':
    app.run(host='0.0.0.0',port= 81,debug=True)
