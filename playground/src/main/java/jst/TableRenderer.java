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
package js2;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public interface TableRenderer {
    String renderTable(List<List<String>> data);

    static TableRenderer newInstance() {
        return new TableRendererImpl();
    }
}

class TableRendererImpl implements TableRenderer {
    @Override
    public String renderTable(List<List<String>> data) {
        if (data.isEmpty()) {
            return "";
        }

        int width = 0;
        int cellWidth = 0;

        for (List<String> row : data) {
            for (String cell : row) {
                if (cell.length() > cellWidth) {
                    cellWidth = cell.length();
                }

            }
            if (width < row.size()) {
                width = row.size();
            }
        }
        cellWidth += 2;

        StringBuilder sb = new StringBuilder();

        Iterator<List<String>> it = data.iterator();
        renderRow(it.next(), cellWidth, sb);
        renderHeaderLine(width, cellWidth, sb);

        while (it.hasNext()) {
            renderRow(it.next(), cellWidth, sb);
        }

        return sb.toString();

    }

    private void renderHeaderLine(int width, int cellWidth, StringBuilder sb) {
        sb.append(fill('-', cellWidth + 1));
        sb.append("+");
        sb.append(fill('-', (width - 1) * cellWidth + 1));
        sb.append("\n");
    }

    private void renderRow(List<String> row, int cellWidth, StringBuilder sb) {
        int x = 0;
        for (String cell : row) {
            if (x == 1) {
                sb.append(" | ");
            }
            sb.append(padLeftTo(cell, cellWidth));
            x += 1;
        }
        sb.append("\n");
    }

    private String padLeftTo(String s, int size) {
        int pad = size - s.length();
        if (pad <= 0) {
            return s;
        }
        return fill(' ', pad) + s;
    }

    private String fill(char c, int size) {
        char[] fill = new char[size];
        Arrays.fill(fill, c);
        return new String(fill);
    }
}
