#!/usr/bin/env python3
import markdown
import weasyprint
import os

def markdown_to_pdf(md_file, pdf_file):
    """Convert markdown file to PDF"""
    
    # Read markdown file
    with open(md_file, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # Convert markdown to HTML
    html = markdown.markdown(md_content, extensions=['tables', 'toc'])
    
    # Add CSS styling for better PDF formatting
    styled_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body {{
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }}
            h1 {{
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
                page-break-after: avoid;
            }}
            h2 {{
                color: #2980b9;
                margin-top: 30px;
                page-break-after: avoid;
            }}
            h3 {{
                color: #3498db;
                margin-top: 25px;
                page-break-after: avoid;
            }}
            h4 {{
                color: #34495e;
                margin-top: 20px;
                page-break-after: avoid;
            }}
            table {{
                border-collapse: collapse;
                width: 100%;
                margin: 20px 0;
            }}
            th, td {{
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }}
            th {{
                background-color: #f2f2f2;
            }}
            ul, ol {{
                margin: 10px 0;
                padding-left: 20px;
            }}
            li {{
                margin: 5px 0;
            }}
            p {{
                margin: 10px 0;
                text-align: justify;
            }}
            .emoji {{
                font-size: 1.2em;
            }}
            @page {{
                size: A4;
                margin: 2cm;
            }}
            .page-break {{
                page-break-before: always;
            }}
        </style>
    </head>
    <body>
        {html}
    </body>
    </html>
    """
    
    # Convert HTML to PDF
    weasyprint.HTML(string=styled_html).write_pdf(pdf_file)
    print(f"PDF created successfully: {pdf_file}")

if __name__ == "__main__":
    markdown_to_pdf("USER_GUIDE_PDF.md", "Dual_Intelligence_Autonomous_Network_Operator_User_Guide.pdf")
