import string, random

chars = list(string.ascii_letters + string.digits + string.punctuation)

def gen_psswd(length):

    random.shuffle(chars)
    psswd = []

    for i in range(length):
        psswd.append(random.choice(chars))
        
    random.shuffle(psswd)
    psswd = "".join(psswd)
    
    return psswd