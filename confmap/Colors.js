// Function to create a different colour for the type markers
//that is going to be used in the map
function Mcolor(id) {
    switch (id) {
        case 1: return '#00ff00';
        case 2: return '#ff4500';
        case 3: return '#800080';
        case 4: return '#ff0000';
        case 5: return '#87ceeb';
        case 6: return '#ffff00';
        case 7: return '#9acd32';
        case 8: return '#8b4513';
        case 9: return '#db7093';
        case 10: return '#000080';
        case 11: return '#f0e68c';
        case 12: return '#e9967a';
        case 13: return '#b8860b';
        case 14: return '#000000';
        case 15: return '#f0f8ff';
        default: return '#5f9ea0';
    }
}

export default Mcolor;