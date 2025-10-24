def is_palindrome(n):
    num = n
    result = 0
    while num > 0:
        last_digit = num % 10
        result = result * 10 + last_digit;
        num = num//10
        
    if(n == result):
        print(f"{n} is a palindrome")
    else:
        print(f'{n} is not a palindrome')

is_palindrome(1111)        
is_palindrome(12345)        

    



    
    
