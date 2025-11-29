// let counter = 0;

// const updateClock = () => {
//     const now = new Date();

//     // 24-hour format
//     const hours24 = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
    
//     // 12-hour format
//     const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
//     const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    
//     console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
//     console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);
// };

// setInterval(updateClock, 1000);

// let counter = 0;

// const updateClock = () => {
//     const now = new Date();

//     // 24-hour format
//     const hours24 = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
    
//     // 12-hour format
//     const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
//     const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    
//     console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
//     console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);

//     setTimeout(updateClock, 1000);
// };

// updateClock();

const updateClock = () => {
    const now = new Date();
    
    const hour24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    const hour12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'pm' : 'am'
    
    console.log(`hours in 24 formet : ${hour24} : ${minutes} : ${second}`)
    console.log(`hours in 12 formet : ${hour12} : ${minutes} : ${second} ${ampm}`)
    setTimeout(updateClock, 1000)
}

updateClock();