const axios = require('axios');
const fetchUsers = require('../src/api');

jest.mock('axios');

test('Integration: отримання користувачів з API (mock axios)', async () => {
    axios.get.mockResolvedValue({
        data: [
            { id: 1, name: 'Іван', email: 'ivan@example.com' },
            { id: 2, name: 'Марія', email: 'maria@example.com' }
        ]
    });
    const users = await fetchUsers();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(users).toHaveLength(2);
    expect(users[1].name).toBe('Марія');
});
