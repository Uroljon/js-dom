// LUCKY GUESS GAME
//12.08.21 12:41 ©️ Xidirboyev O'roljon
let onPlayingMood = confirm("Men bir son o'yladim. Uni topishga urinib ko'rishni istaysizmi ?");
onPlayingMood ? play(Math.round(Math.random() * 20)) : window.location.href = "https://fulfiledu.uz";
function play(son) {
    // console.log(son); baribir korsatmadi 
    let tahmin = Number(prompt("Qaysi son o'yladim deb o'ylaysiz ?"));
    let urinish = 1;

    if (tahmin === son) {
        alert(`Qoyil!!! siz ${urinish} ta urinishda topdingiz! Buni qayerdan bildingiz 🤨`);
        return 1;
    }

    while (tahmin !== son) {
        tahmin = tahmin > son ? prompt("Men o'ylagan son bundan kichikroq ;)") : prompt("Men o'ylagan son bundan kattaroq ;)");
        tahmin = Number(tahmin);//shu 2 soat vaqtimni oldi. Yaramas prompt() string qaytarardi ;(
        urinish++;
        if (tahmin === null) {
            break;
        }
        if (tahmin === son) {
            alert(`🟢 Tabriklayman siz meni yutdingiz, men rostdan ham ${son} sonini o'ylagandim
            Siz jami ${urinish} ta urinishda topdingiz, Rakaballa :) `);
            break;
        }
    }
    (confirm("Yana o'ynashni xohlaysizmi ?") ? play(Math.round(Math.random() * 20)) : document.write("Ketgan vaqtingizga rozi bo'ling🥺"));
}



/* [Forwarded from Lesson]
=================================
🔴 Vazifa - Son topish o'yini
=================================
❓Dastur tuziladi, dasturning maqsadi saytga kirilganda bir ixtiyoriy son o'ylanadi va confirm'da son o'ylanganligi va foydalanuvchi uni topishga urinib korishi soraladi, foydalanuvchi urinishlari promt orqali olinadi. Va kiritilgan javobga qarab men oylagan son bundan katta yoki kichik yoki toptiz deyilishi kerak va har bir urinish hisoblanib oxirida togri javob topilsa nechta urinishda topilganiniyam aytishi kerak (alertda).

- Confirm chiqadi, Rozilik bildirilsa o'yin boshlanadi, bo'lmasa foydalanuvchi https://fulfiledu.uz saytiga yo'naltiriladi
- Dastur 0 dan 20gacha bo'lgan son o'ylaydi
- Promt ochiladi va taxminlar sorala boshlaydi
- Javob berilishiga qarab, men oylagan son bundan kattarroq, yoki kichikroq deyiladi
- Agar javob to'gri bo'lsa quyidagicha natija chiqishi kerak

🟢 Tabriklayman siz meni yutdingiz, men rostdan ham 5 sonini o'ylagandim
Siz 4 ta urinishda toptingiz, Barakalla!
Jami 10 ta urinishda toptingiz

🔸Topshiriqlar yuklanishida hamma o'zining github profilida js-dom degan repository ochadi va hamma topshiriqlar shu repo'ni ichiga har bitta darsga alohida papka (1-dars, 2-dars....) ochilib qoshilib boriladi. Topshiriqlar @mernperntasksbot ga yuborilishi lozim

PS: Savol tushunarsiz bo'lsa ham tepadagi murojaat qilish mumkin. While tsikli dan foydalanish tavsiya etiladi*/