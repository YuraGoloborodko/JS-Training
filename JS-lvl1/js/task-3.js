const ADMIN_PASSWORD = 'qwerty';
let message;
let result = prompt("Введите пароль.")
if(result == null){
    message = 'Отменено пользователем!'
} else if(ADMIN_PASSWORD == result){
    message = 'Добро пожаловать!'
} else{
    message = 'Доступ запрещен, неверный пароль!'
}   
alert(message)