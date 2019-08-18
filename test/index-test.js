import assert from 'assert';
import { LinkNode, LinkedList } from '../index.js'; 

describe('LinkList', () => {
    it('append() should append a node after the last node', () => {
        const linklist = new LinkedList();
        linklist.append('a');
        linklist.append('b');
        linklist.append('c');
        assert.equal(linklist.printf(), 'a,b,c');
        assert.equal(linklist.length(), 3);
    });

    it('insert() should insert a node after the index node', () => {
        const linklist = new LinkedList();
        linklist.insert('a', 0);
        assert.equal(linklist.printf(), 'a');
        assert.equal(linklist.length(), 1);
        linklist.insert('b', 0);
        assert.equal(linklist.printf(), 'b,a');
        assert.equal(linklist.length(), 2);
    });

    it('remove() should remove the first node that matches the element', () => {
        const linklist = new LinkedList();
        linklist.append('a');
        assert.equal(linklist.length(), 1);
        linklist.remove('a');
        assert.equal(linklist.length(), 0);
    });

    it('removeAt() should remove the first node that matches the index', () => {
        const linklist = new LinkedList();
        linklist.append('a');
        linklist.append('b');
        linklist.append('c');
        linklist.removeAt(1);
        assert.equal(linklist.printf(), 'a,c');
    });

    it('removeAll() should remove all nodes', () => {
        const linklist = new LinkedList();
        linklist.append('a');
        linklist.append('a');
        linklist.append('b');
        linklist.append('b');
        linklist.append('c');
        linklist.append('c');
        linklist.removeAll('b');
        assert.equal(linklist.length(), 4);
    });

    it('getElement() should return the element that matches the index', () => {
        const linklist = new LinkedList();
        linklist.append('a');
        linklist.append('b');
        linklist.append('c');
        assert.equal(linklist.getElement(1), 'b');
    });

    it('indexOf() should return the index that matches the element', () => {
        const linklist = new LinkedList();
        linklist.append('a');
        linklist.append('b');
        linklist.append('c');
        assert.equal(linklist.indexOf('b'), 1);
    });

    it('clear() should return the index that matches the element', () => {
        const linklist = new LinkedList();
        linklist.append('a');
        linklist.append('b');
        linklist.append('c');
        linklist.clear();
        assert.equal(linklist.printf(), null);
        assert.equal(linklist.length(), 0);
    });
});