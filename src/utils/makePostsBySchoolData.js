export const makePostsBySchoolData = (data) => {
    return {
        labels: data.map(({ name }) => name),
        datasets: [
            {
                label: 'Posts by School',
                data: data.map(({ count }) => count),
                backgroundColor: '#ABC767',
            },
        ],
    }
}