import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import pickle
df12= pd.read_csv("data_for_training.csv")
x=df12.drop("price",axis="columns")
y=df12["price"]

x_train ,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=2)

model= LinearRegression()
model.fit(x_train,y_train)

with open("model.pickle", "wb") as f:
    pickle.dump(model,f)