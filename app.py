from flask import Flask, render_template, request
from werkzeug.utils import secure_filename

app = Flask(__name__)


@app.route('/')
def good():
    return render_template('good.html')

@app.route('/hello')
def hello():
    return render_template('hello.html')


@app.route("/hello2")
def hello2():
    return render_template("hello2.html")

@app.route('/upload')
def upload():
    return render_template('upload.html')




@app.route('/uploader', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        f.save('C:/dev/vscode_workspace/FlaskIntro/static/uploads/' + secure_filename(f.filename))
        return 'file uploaded successfully'


if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug=True)