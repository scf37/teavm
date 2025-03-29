/*
 *  Copyright 2025 asm.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package jst;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface Table {
    void addCell(int x, int y, String value);

    void addRowHeader(int n, String value);

    void addColumnHeader(int n, String value);

    List<List<String>> getTable();

    static Table newInstance() {
        return new TableImpl();
    }
}

class TableImpl implements Table {
    private class Point {
        int x;
        int y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object o) {
            if (!(o instanceof Point)) {
                return false;
            }
            Point point = (Point) o;
            return x == point.x && y == point.y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }
    }

    private final Map<Point, String> values = new HashMap<>();

    @Override
    public void addCell(int x, int y, String value) {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Table coordinates can not be negative");
        }
        values.put(new Point(x, y), value);
    }

    @Override
    public void addRowHeader(int n, String value) {
        values.put(new Point(-1, n), value);
    }

    @Override
    public void addColumnHeader(int n, String value) {
        values.put(new Point(n, -1), value);
    }

    @Override
    public List<List<String>> getTable() {
        int width = -1;
        int height = -1;
        for (Point p : values.keySet()) {
            if (p.x > width) {
                width = p.x;
            }
            if (p.y > height) {
                height = p.y;
            }
        }
        width++;
        height++;

        List<List<String>> result = new ArrayList<>(height);
        for (int y = -1; y < height; y++) {
            List<String> row = new ArrayList<>(width);
            for (int x = -1; x < width; x++) {
                String value = values.getOrDefault(new Point(x, y), "?");
                if (x == -1 && y == -1) {
                    value = "";
                }
                row.add(value);
            }
            result.add(row);
        }

        return result;
    }
}
