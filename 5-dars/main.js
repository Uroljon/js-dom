/********
🔸 3Sum clothes
▪️ Funksiya tuziladi
▪️ Funksiya parametr sifatida nums array'i ni va target sonini qabul qiladi.
▪️ Funksiya nums array'idan target ga eng yaqin bo'lgan sonni topishi va o'sha sonni qaytarishi kerak

🔸 Rock, Paper, Scissors game
▪️ Sahifa tuzish
▪️ Sahifada kirgan odam o'yin o'yanishi mumkin bo'lishi mumkin
▪️ Raqib sifatida biz tuzgan dasturni o'zi random harakat ko'rsatib turadi va natijalar hisoblanadi
▪️ Natijalar Local Storage da saqlanishi kerak
▪️ Sahifada animatsiyalar bo'lishi kerak, qo'l qimirlashiga o'xshash

▪️ Demo: https://www.afiniti.com/corporate/rock-paper-scissors

▫️ Paper: https://www.afiniti.com/static/media/paper.24d69089.png
▫️ Rock: https://www.afiniti.com/static/media/rock.fae7b245.png
▫️ Scissosrs: https://www.afiniti.com/static/media/scissors.0dc12241.png
**********/
function smallerThanTarget(nums, target) {

    let farq = Math.abs(target - nums[0]);
    let kichikElement = nums[0];
    let kattaElement = nums[0];

    nums.forEach(element => {
        if (element === target) {
            console.log("teng son bor ekan")
            kichikElement = target;
        }
        if (farq > Math.abs(target - element)) {

            farq = Math.abs(target - element)
            kichikElement = (target > element) ? element : null; //elem target dan kichik bolsa saqlab qoyadi
            kattaElement = (target < element) ? element : null; //elem target dan katta bolsa saqlab qoyadi

            if (target === element) {
                kichikElement = target;
                nums.length = 0; // break for Each loop
               // break; // this doesn't work
            }

        } else if (farq === Math.abs(target - element)) {
            if (kichikElement) { //agar kichik element saqlab qoyilgan bolsa :
                kichikElement = (kichikElement <= element) && kichikElement;
            } else if (kattaElement) {
                kattaElement = (kattaElement >= element) && element;
            }
        }
    });
    return kichikElement || kattaElement;
}
console.log(smallerThanTarget([1, 2, 0, 6, 8, 9, 10], 4));