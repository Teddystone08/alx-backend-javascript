export default function getSumofHoods(hoods) {
    return hoods.reduce((sum, hood) => sum + hood, 0);
}

