import vplusplus
while True:
    text = input('v++ > ')
    result, error = vplusplus.run('<stdin>', text)
    if error: print(error.as_string())
    else: print(result)