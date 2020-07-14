
export function getTeamInfo(teamId) {
    return fetch(`/api/americas/${teamId}`)
    .then(res => res.json());
}

