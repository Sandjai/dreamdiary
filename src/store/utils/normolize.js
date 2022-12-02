export const normolize = (items, month, year) => ({
    entities: items,
    ids: Object.keys(items),
    months: [`${month}-${year}`],
    allTypes: Object.values(items).map((item) => item.type)


    });

