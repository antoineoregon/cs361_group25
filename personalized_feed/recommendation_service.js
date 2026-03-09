const fs = require('fs');
const readData = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

exports.getRecommendations = (userId) => {
    const users = readData('users.json');
    const user = users.find(u => u.userId === userId);
    if (!user) throw new Error('NOT_FOUND');

    const items = readData('items.json');
    return items.filter(item => item.tags.some(t => user.interest_tags.includes(t)));
};