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

public class Main {
    private Main() { }
    public static void main(String[] args) {
        System.out.println(renderTable());
    }

    private static String renderTable() {
        Table table = Table.newInstance();
        TableRenderer tableRenderer = TableRenderer.newInstance();
        fillTable(table);
        return tableRenderer.renderTable(table.getTable());
    }

    private static void fillTable(Table table) {
        for (int i = 1; i <= 15; i++) {
            for (int j = 1; j <= 15; j++) {
                table.addCell(j, i, String.valueOf(i * j));
            }
            table.addColumnHeader(i, String.valueOf(i));
            table.addRowHeader(i, String.valueOf(i));
        }
    }
}
