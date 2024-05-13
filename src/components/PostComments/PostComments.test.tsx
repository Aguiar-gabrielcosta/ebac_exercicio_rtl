import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir dois comentários ("Bacana" e "Legal")', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Bacana'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Legal'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Bacana')).toBeInTheDocument()
        expect(screen.getByText('Legal')).toBeInTheDocument()
    })
});