
type I_SayName<T> = string

function say_name(name:string ):I_SayName<string> {
    return name
}

console.log(say_name('dave'))