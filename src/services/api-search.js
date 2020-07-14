
export function getTeamInfo(teamId) {
    return fetch(`/api/americas/team/${teamId}`)
    .then(res => res.json());
}


export function getPlayerInfo(playerId) {
    return fetch(`/api/americas/player/${playerId}`)
    .then(res => res.json());
}