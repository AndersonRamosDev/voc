function vericar(){
        //Formatação das Strings
     var nomeUrl=document.getElementById("nome")
         var name=String(nomeUrl.value)
     var sobreNomeUrl=document.getElementById('sobreNome')
         let sobreNome=String(sobreNomeUrl.value)
        //Formatação das Data
     var anoNas=document.getElementById('DataNascimento')
         var dataNascimento=Number(anoNas.value)
             var agora=new Date()
                 var data= agora.getFullYear()
                     var idade= data-dataNascimento
        //formatação de Print na tela
     var tela=document.getElementById('print')
       //Formatação de situação
     if(name == 0 || sobreNome == 0 || dataNascimento == 0){
         window.alert(` \u{1F6D1}[ERROR]\u{1F6D1} Verifique se as informações estão corretas `)
     }else if(idade <=15){
         tela.innerHTML=`${name} ${sobreNome} Não Vota!!! \u{263A}`
     }else if(idade == 16 || idade <=17 || idade >=68){
         tela.innerHTML=`${name} ${sobreNome} Seu voto é Facultativo!!! \u{263A}`
     }else if(idade >= 18 || idade <= 67){
         tela.innerHTML=`${name} ${sobreNome} Seu voto é Obrigatório!!! \u{263A}`
     }
}//Final da Function
