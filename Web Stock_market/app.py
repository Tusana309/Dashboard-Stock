from flask import Flask, render_template, request, flash
import solve
from sklearn.preprocessing import StandardScaler
import joblib
import random

site = Flask(__name__)
site.secret_key = "manbearpig_MUDMAN888"
@site.route('/', methods = ['GET','POST'])
# def home():
#     return render_template('index.html')
def test():
    if request.method == 'POST':
        stock = request.form.get("input")
        rand = random.randint(0,1)
        if stock == "Chose one stock ....":
            return render_template('index.html')
        if rand == 1:
            flash('Mã cố phiếu {} được dự đoán sẽ tăng'.format(stock))
        else:
            flash('Mã cố phiếu {} được dự đoán sẽ giảm'.format(stock))
        return render_template('index.html')
    else:
        return render_template('index.html')
# standard_to = StandardScaler()
if __name__ == '__main__':
   site.run(debug=True)