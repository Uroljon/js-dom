/********
🔸 3Sum clothes
▪️ Funksiya tuziladi
▪️ Funksiya parametr sifatida nums array'i ni va target sonini qabul qiladi.
▪️ Funksiya nums array'idan target ga eng yaqin bo'lgan sonni topishi va o'sha sonni qaytarishi kerak
**********/
function smallerThanTarget(nums, target) {

    let farq = Math.abs(target - nums[0]);
    let kichikElement = nums[0];
    let kattaElement = nums[0];

    nums.forEach(element => {

        if (farq > Math.abs(target - element)) {

            farq = Math.abs(target - element)
            kichikElement = (target > element) ? element : null; //elem target dan kichik bolsa saqlab qoyadi
            kattaElement = (target < element) ? element : null; //elem target dan katta bolsa saqlab qoyadi

            if (target === element) {
                console.log("teng son bor ekan")
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
console.log("1-topshiriq algoritmi ishladi. smallerThanTarget([1, 2, 0, 6, 8, 9, 10], 4) =>", smallerThanTarget([1, 2, 0, 6, 8, 9, 10], 4));