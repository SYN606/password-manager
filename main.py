import eel 

import password

eel.init("web")


@eel.expose
def got_data(aso_account, aso_email, pss_sten):

    generated_password = password.gen_psswd(int(pss_sten))
            
    return(generated_password)
        

eel.start(  
            "index.html", 
            mode='default', 
            host='localhost',
            port='2700'
            )
