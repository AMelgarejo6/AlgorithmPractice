function fibonacci(num){
    if(num == 1){
        return 0
    }
    else if(num < 2){
        return 1;
    }
    return fibonacci(num-2) + fibonacci(num-1)
}
                ///fib(5)      fib(3) + fib(4) = 1 + 2    
///                  |
///            fib(3) + fib(4)     #fib(4) = 2         fib(3) + fib(4) = 1 + 2    == 3
///             /          \   
///     fib(1)+fib(2) fib(2)+fib(3)    #fib(3) = 0 + 1      fib(2) = 1    so that means fib(2) + fib(3) = 2
///                             \
///                        fib(1)+fib(2)  #returns 0 + 1
///
///
///


console.log(fibonacci(5));

