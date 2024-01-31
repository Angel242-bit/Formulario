var countrySateCityinfo = {
  
    Brasil: {
        RíodeJaneiro: {
            Petrópolis: ["Valparaíso", "Quitandinha", "Araras"],
            DuquedeCaxias: ["Parque Lafaiete", "Santa Cruz da Serra", "Jardim Primavera"]
        },
        Amazonas: {
            Manaus: ["Cidade Nova", "Ponta Negra", "Chapada"],
            Coari: ["Lago do Jacaré", "Centro"]
        }
    },

    USA: {
        California: {
            LosAngeles: ["Hollywood", "Los Feliz", "Hancock Park"],
            Merced: ["Gustine", "Stevinson", "Tuttle"]
        },
        NuevaYork: {
            Kingston: ["Rollington Town", "	Hannah Town"],
            Salamanca: ["Canarias", "Galicia", "La Rioja"]
        }
    },
    Mexico: {
        Hidalgo: {
            Tula: ["El llano", "San Marcos", "El Carmen"],
            Tepeji: ["San Ildefonso", "La Loma", "El crucero"]
        },
        BajaCalifornia: {
            Mexicali: ["Venustiano Carranza", "San Felipe"],
            Tijuana: ["Cerro Colorado", "San Antonio de los Buenos", "Presa Este"]
        }
    }
    
}

window.onload = function(){
    const selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity = document.getElementById('city'),
        selectZip = document.getElementById('zip'),
        selects = document.querySelectorAll('select')

        selectState.disabled = true
        selectCity.disabled = true
        selectZip.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let country in countrySateCityinfo){
            // console.log(country);
            selectCountry.options[selectCountry.options.length] = new Option(country, country)
        }


        // country change
        selectCountry.onchange = (e) =>{
            
            selectState.disabled = false
            selectCity.disabled = true
            selectZip.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectState.length = 1
            selectCity.length = 1
            selectZip.length = 1

            for(let state in countrySateCityinfo[e.target.value]){
                // console.log(state);
                selectState.options[selectState.options.length] = new Option(state, state)
            }
        }

        // state change
        selectState.onchange = (e) =>{
            selectCity.disabled = false
            selectZip.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectCity.length = 1
            selectZip.length = 1

            for(let city in countrySateCityinfo[selectCountry.value][e.target.value]){
                // console.log(city);
                selectCity.options[selectCity.options.length] = new Option(city, city)
            }
        }

        // change city
        selectCity.onchange = (e) =>{
            selectZip.disabled = false

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })
            
            selectZip.length = 1

            let zips = countrySateCityinfo[selectCountry.value][selectState.value][e.target.value]
            
            for(let i=0; i<zips.length; i++){
                selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
            }
        }
}
