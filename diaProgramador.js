function dayOfProgrammer(year) {
    const days = year % 4 == 0 ? 244 : 243
    const dayProgrammer = 256 - days

    console.log(`${dayProgrammer}.09.${year}`)
}
  
dayOfProgrammer(1985)