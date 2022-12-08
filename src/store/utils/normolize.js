export const normolize = (items, monthYear) => ({
    entities: items,
    ids: [{[monthYear]: Object.keys(items)}],
    months: monthYear,
    });

