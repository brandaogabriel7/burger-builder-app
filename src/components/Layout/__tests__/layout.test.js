import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from '../Layout';

const renderChildrenTestCases = [
    [<button>batata</button>, 'button', 'batata'],
    [<a href="https://www.google.com">google</a>, 'link', 'google'],
    [<h1>this is the title</h1>, 'heading', 'this is the title']
];

const matchSnapshotTestCases = [
    [
        <h1>batata</h1>,
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
        </ul>
    ],
    [
        <form>
            <input type="text" />
            <button>Submit</button>
        </form>
    ]
];

describe('layout should', () => {
    it('render correctly', () => {
        render(<Layout />);
        expect(
            screen.getByText(/toolbar, sidedrawer, backdrop/i)
        ).toBeInTheDocument();
    });

    it.each(renderChildrenTestCases)(
        "render children '%j' correctly",
        (children, role, name) => {
            render(<Layout>{children}</Layout>);
            expect(screen.getByRole(role, { name })).toBeInTheDocument();
        }
    );

    it.each(matchSnapshotTestCases)('match snapshot for %j', (children) => {
        const container = render(<Layout>{children}</Layout>);
        expect(container).toMatchSnapshot();
    });
});
