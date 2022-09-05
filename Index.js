function CalculateGS(){
    /*
        Score = Attack %
        + Defense %
        + Hp %
        + Effectiveness
        + Effect Resistance
        + Speed * (8/4)
        + Crit Damage * (8/7)
        + Crit Chance * (8/5)
        + Flat Attack * 3.46 / 39
        + Flat Defense * 4.99 / 31
        + Flat Hp * 3.09 / 174
        */
        let stats = document.querySelectorAll("input");

        
        let attackPercent = stats[0].value;
        let attackFlat = stats[1].value;
        let defensePercent = stats[2].value;
        let defenseFlat = stats[3].value;
        let healthPercent = stats[4].value;
        let healthFlat = stats[5].value;
        let Effectiveness = stats[6].value;
        let EffectResistance = stats[7].value;
        let Speed = stats[8].value;
        let CritDamage = stats[9].value;
        let CritChance = stats[10].value;

        let gs = 0;
        console.log(Math.round((+attackPercent + Number.EPSILON) * 100) / 100 );
        gs = +gs + +Math.round((+attackPercent + Number.EPSILON) * 100) / 100 ;
        console.log(gs);
        gs = +gs + +Math.round((+defensePercent + Number.EPSILON) * 100) / 100 ;
        gs = +gs + +Math.round((+healthPercent + Number.EPSILON) * 100) / 100 ;
        gs = +gs + +Math.round((+Effectiveness + Number.EPSILON) * 100) / 100 ;
        gs = +gs + +Math.round((+EffectResistance + Number.EPSILON) * 100) / 100 ;
        gs = +gs + +Math.round((Speed * (8/4) + Number.EPSILON) * 100) / 100 ;

        console.log(Math.round((Speed * (8/4) + Number.EPSILON) * 100) / 100 );
        console.log(gs);
        gs = +gs + +Math.round((CritDamage * (8/7) + Number.EPSILON) * 100) / 100 ;
        gs = +gs + +Math.round((CritChance * (8/5) + Number.EPSILON) * 100) / 100 ;

        gs = +gs + +Math.round((attackFlat * 3.46 / 39 + Number.EPSILON) * 100) / 100 ;
        gs = +gs + +Math.round((defenseFlat * 4.99 / 31 + Number.EPSILON) * 100) / 100 ;
        gs = +gs + +Math.round((healthFlat * 3.09 / 174 + Number.EPSILON) * 100) / 100 ;

        gs = Math.round((+gs + Number.EPSILON) * 100) / 100 ;

        let gsText = document.getElementsByClassName("gsText")[0];
        gsText.innerHTML = "This gear score is: " +gs;
}
