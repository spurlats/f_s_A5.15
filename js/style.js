let button = document.querySelector('.button');

button.addEventListener('click', showPopup);

function showPopup() {
    const var1 = $("input[name=var1]").val()
    const var2 = $("input[name=var2]").val()
    const var3 = $("input[name=var3]").val()
    const var4 = $("input[name=var4]").val()
    const var5 = $("input[name=var5]").val()
    const var6 = $("input[name=var6]").val()
    const speach = $("input[name=speach]").val()
    const tale = ('Жили-были '+ var1 +' да '+ var2 +',Была у них '+ var3 +'. Снесла '+ var3 +' '+ var4 +', да не простое, а золотое! '+ var1 +' бил, бил - не разбил, '+ var2 +' била, била - не разбила. Тут '+ var5 +' бежала, '+ var6 +' машнула, '+ var4 +' упало и разбилось. '+ var1 +' плачет, '+ var2 +' плачет, а '+ var3 +' кудахчет: '+ speach);
    document.querySelector('.popup').classList.toggle('visible');
    $('.popup').text(tale);
}

