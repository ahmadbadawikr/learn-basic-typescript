it('should support only readonly array', function() {
    const hobbies: ReadonlyArray<string> = ['badminton', 'football'];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
})

it('should support only tuple', function() {
    const manutd_players: [string, string, number] = ['G Best', 'W Rooney', 9];
    console.info(manutd_players);
    console.info(manutd_players[0]);
    console.info(manutd_players[1]);
    console.info(manutd_players[2]);
})
