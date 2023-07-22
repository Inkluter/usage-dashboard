const backgroundColor = [
    '#6CB374',
    '#FFCB97',
    '#B46133',
    '#009DA9',
    '#FF7060',
    '#454839',
];

export const makeDistributionData = (data) => ({
    labels: data.map(item => `${item.name} (${item.count})`),
        datasets: [{
        label: 'Post Distribution',
        data: data.map(item => item.count),
        backgroundColor,
        hoverOffset: 4
    }],
});