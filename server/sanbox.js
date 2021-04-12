function time(x) {
  if (!x) return "Timeout!"

  setTimeout(() => {
    let minutes = Math.floor(x / 60)
    let second = x - minutes * 60

    if (second < 10) {
      console.log(`${minutes}:0${second}`)
    } else {
      console.log(`${minutes}:${second}`)
    }
    
    time(x - 1)
  }, 1000);
}

time(123)