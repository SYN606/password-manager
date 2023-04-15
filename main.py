import eel

eel.init("web")

@eel.expose # decorater
def get_data():
    print("Function is running succesfully")
    return "Hello world"

@eel.expose
def show_passwords():
    print("Show passwords is running successfully")
    return "This is a Password"

eel.start(  
            "index.html", 
            mode='default', 
            host='localhost',
            port='2700'
            
            )
