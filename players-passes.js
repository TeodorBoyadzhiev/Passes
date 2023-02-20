import { passes } from "./passes.js";

function mostCompletePercentage() {
    let players = [];

    for (let i = 0; i < passes.length; i++) {
        let indexOfPlayer = players.findIndex((player) => player.name == passes[i].receiver);

        if ((indexOfPlayer !== -1) && (passes[i].result === 'complete')) {
            players[indexOfPlayer].passesCount += 1;
            players[indexOfPlayer].completedPasses += 1;
            players[indexOfPlayer].mostPtc = (players[indexOfPlayer].completedPasses / players[indexOfPlayer].passesCount * 100).toFixed();

            players[indexOfPlayer].distance = players[indexOfPlayer].distance > passes[i].distance
                ? players[indexOfPlayer].distance
                : passes[i].distance;

        } else if (indexOfPlayer !== -1) {
            players[indexOfPlayer].passesCount += 1;
            players[indexOfPlayer].mostPtc = (players[indexOfPlayer].completedPasses / players[indexOfPlayer].passesCount * 100).toFixed();


            players[indexOfPlayer].distance = players[indexOfPlayer].distance > passes[i].distance
                ? players[indexOfPlayer].distance
                : passes[i].distance;

        } else {
            let player = {
                name: passes[i].receiver,
                distance: passes[i].distance,
                passesCount: 1,
                completedPasses: passes[i].result === 'complete' ? 1 : 0
            }

            players.push(player)
        }

    }

    let player = players.slice();
    let mostCompletePercentage = player.sort((a, b) => b.mostPtc - a.mostPtc);
    let longestDistance = players.sort((a, b) => b.distance - a.distance);

    let MVPValue = mostCompletePercentage[0].mostPtc + '%';
    let longDistancePassValue = Number(longestDistance[0].distance);

    const MVP = {
        player: mostCompletePercentage[0].name,
        value: MVPValue
    };

    const longDistancePass = {
        player: longestDistance[0].name,
        value: longDistancePassValue
    }

    console.log(MVP);
    console.log(longDistancePass);
}

mostCompletePercentage();