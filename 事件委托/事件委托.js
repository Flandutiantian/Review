ul.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'li') {
        fn()// 执行某个函数
    }
})