<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

        <html>
            <body>
                <table>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>birthrate</td>
                        <td>cellphones</td>
                        <td>children</td>
                        <td>electricity</td>
                        <td>internet usage</td>
                    </tr>
                    <xsl:for-each select="Countries/Country">
                    <tr>
                        <td><xsl:value-of select="id"/></td>
                        <td><xsl:value-of select="name"/></td>
                        <td><xsl:value-of select="birth"/></td>
                        <td><xsl:value-of select="cell"/></td>
                        <td><xsl:value-of select="children"/></td>
                        <td><xsl:value-of select="electricity"/></td>
                        <td><xsl:value-of select="internet"/></td>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>

    </xsl:template>

</xsl:stylesheet>

