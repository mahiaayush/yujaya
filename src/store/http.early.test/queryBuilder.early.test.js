
import { queryBuilder } from '../http';


// Import the function to be tested
describe('queryBuilder() queryBuilder method', () => {
  // Happy path tests
  describe('Happy paths', () => {
    test('should return an empty string when given an empty object', () => {
      const input = {};
      const result = queryBuilder(input);
      expect(result).toBe('');
    });

    test('should build a query string from a single key-value pair', () => {
      const input = { key: 'value' };
      const result = queryBuilder(input);
      expect(result).toBe('key=value');
    });

    test('should build a query string from multiple key-value pairs', () => {
      const input = { key1: 'value1', key2: 'value2' };
      const result = queryBuilder(input);
      expect(result).toBe('key1=value1&key2=value2');
    });

    test('should encode the search parameter', () => {
      const input = { search: 'a search string' };
      const result = queryBuilder(input);
      expect(result).toBe('search=a%20search%20string');
    });

    test('should ignore keys with falsy values', () => {
      const input = { key1: 'value1', key2: '', key3: null, key4: undefined, key5: 0 };
      const result = queryBuilder(input);
      expect(result).toBe('key1=value1');
    });
  });

  // Edge case tests
  describe('Edge cases', () => {
    test('should handle special characters in keys and values', () => {
      const input = { 'key!@#$': 'value!@#$' };
      const result = queryBuilder(input);
      expect(result).toBe('key!@#$=value!@#$');
    });

    test('should handle numeric values correctly', () => {
      const input = { key1: 123, key2: 0 };
      const result = queryBuilder(input);
      expect(result).toBe('key1=123');
    });

    test('should handle boolean values correctly', () => {
      const input = { key1: true, key2: false };
      const result = queryBuilder(input);
      expect(result).toBe('key1=true');
    });

    test('should handle undefined input gracefully', () => {
      const result = queryBuilder(undefined);
      expect(result).toBe('');
    });

    test('should handle null input gracefully', () => {
      const result = queryBuilder(null);
      expect(result).toBe('');
    });

    test('should handle input with only falsy values', () => {
      const input = { key1: '', key2: null, key3: undefined, key4: 0, key5: false };
      const result = queryBuilder(input);
      expect(result).toBe('');
    });
  });
});