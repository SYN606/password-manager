import eel

eel.init("web")

@eel.expose
def get_data():
    print("Function is running succesfully")
    return "Got data from python"

eel.start(  
            "index.html", 
            mode='default', 
            host='localhost',
            port='2700'
            
            )
