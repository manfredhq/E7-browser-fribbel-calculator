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
        gs += attackPercent;
        gs += defensePercent;
        gs += healthPercent;
        gs += Effectiveness;
        gs += EffectResistance;
        gs += Speed * (8/4);

        gs += CritDamage * (8/7);
        gs += CritChance * (8/5);

        gs += attackFlat * 3.46 / 39;
        gs += defenseFlat * 4.99 / 31;
        gs += healthFlat * 3.09 / 174;

        alert(gs);
}
