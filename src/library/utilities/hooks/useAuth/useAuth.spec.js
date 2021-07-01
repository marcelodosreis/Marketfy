import { useAuth } from './useAuth';
import { renderHook } from '@testing-library/react-hooks';

describe('Hooks/useAuth', () => {
    it('Should useAuth Works', async () => {
        const { result } = renderHook(() => useAuth());

        expect(useAuth).toBeTruthy();
        expect(result).toBeTruthy();
    });
});
