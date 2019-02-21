using OfficeOpenXml.Style;
using System;
using System.Drawing;
using System.IO;
using OfficeOpenXml;
using OfficeOpenXml.Drawing;

namespace GHM.Infrastructure.Helpers
{
    public class ExcelHelper
    {
        public static void CreateHeaderTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, ExcelHorizontalAlignment.Center, false, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value, ExcelHorizontalAlignment align, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, false, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, Color color, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, Color color, float size, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, size, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, Color color, float size, bool bold, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int row, int col, object value, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, ExcelHorizontalAlignment.Center, false, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, false, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color background, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, background, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color background, Color color, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, background, color, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color background, Color color, float size, bool bold, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, string range, object value, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, ExcelHorizontalAlignment.Center, false, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, null, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, null, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, null, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float size, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, size, true, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateHeaderTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold, bool wrapText, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, size, bold, wrapText, autoFitColumn: autoFitColumn);
        }

        // Cell table
        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, ExcelHorizontalAlignment.Left, false, null, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value, ExcelHorizontalAlignment align, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, false, null, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, null, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, Color color, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, Color color, float size, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, size, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color background, Color color, float size, bool bold, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value,
            ExcelHorizontalAlignment align, bool merge, Color? background, Color? color, float? size, bool bold, bool wrapText, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, size, bold, wrapText, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, ExcelHorizontalAlignment.Left, false, null, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, false, null, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, null, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, background, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, background, color, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold, bool wrapText, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[row, col], value, align, merge, background, color, size, bold, wrapText, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, ExcelHorizontalAlignment.Left, false, null, null, null, autoFitColumn: autoFitColumn);
        }
        public static void SetBorder(ExcelWorksheet sheet, string range)
        {
            SetBorder(sheet.Cells[range]);
        }
        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, null, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color background, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, null, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color background, Color color, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, null, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color background, Color color, float size, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, size, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color background, Color color, float size, bool bold, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold, bool wrapText, bool autoFitColumn = true)
        {
            CreateCellTable(sheet.Cells[range], value, align, merge, background, color, size, bold, wrapText, autoFitColumn: autoFitColumn);
        }


        public static void CreateCell(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold = false, bool autoFitColumn = true)
        {
            CreateCell(sheet.Cells[fromRow, fromCol, toRow, toCol], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateCell(ExcelWorksheet sheet, int row, int col, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold = false, bool autoFitColumn = true)
        {
            CreateCell(sheet.Cells[row, col], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }

        public static void CreateCell(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold = false, bool autoFitColumn = true)
        {
            CreateCell(sheet.Cells[range], value, align, merge, background, color, size, bold, autoFitColumn: autoFitColumn);
        }
        public static void CreateCell(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
           Color? background, Color? color, float? size, string font, bool bold = false, bool autoFitColumn = true)
        {
            CreateCell(sheet.Cells[range], value, align, merge, background, color, size, font, bold, autoFitColumn: autoFitColumn);
        }


        public static void CreateCell(ExcelWorksheet sheet, string range, object value, ExcelHorizontalAlignment align, bool merge,
            Color? background, Color? color, float? size, bool bold, bool wrapText, bool autoFitColumn = true)
        {
            CreateCell(sheet.Cells[range], value, align, merge, background, color, size, bold, wrapText, autoFitColumn: autoFitColumn);
        }

        public static void AddImage(ExcelWorksheet sheet, string name, int rowIndex, int colIndex, Stream stream, int width, int height, bool hasBorder = true)
        {
            //var image = new Bitmap(stream);
            //var excelImage = sheet.Drawings.AddPicture(name, image);
            //excelImage.From.Column = colIndex;
            //excelImage.From.Row = rowIndex;
            //excelImage.SetSize(width, height);
            //excelImage.From.ColumnOff = Pixel2Mtu(2);
            //excelImage.From.RowOff = Pixel2Mtu(2);
            //if (hasBorder)
            //{
            //    excelImage.Border.LineStyle = eLineStyle.Solid;
            //    excelImage.Border.Fill.Color = Color.Black;
            //}
        }

        private static int Pixel2Mtu(int pixels)
        {
            return pixels * 9525;
        }

        public static void AddHeaderAndFooter(ExcelWorksheet sheet, eOrientation orientation = eOrientation.Landscape, ePaperSize pagerSize = ePaperSize.A4)
        {
            AddHeaderAndFooter(sheet, @"Template\Images\HeaderVTI.jpg", @"Template\Images\FooterVTI.jpg", orientation, pagerSize);
        }

        public static void AddHeaderAndFooter(ExcelWorksheet sheet, string imgHeaderPath, string imgFooterPath, eOrientation orientation = eOrientation.Landscape, ePaperSize pagerSize = ePaperSize.A4)
        {
            var headerPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, imgHeaderPath);
            var footerPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, imgFooterPath);

            // TODO: Check this later.
            //var evenHeader = sheet.HeaderFooter.EvenHeader.InsertPicture(new FileInfo(headerPath), PictureAlignment.Left);
            //if (orientation == eOrientation.Portrait)
            //{
            //    evenHeader.Width = evenHeader.Width - (5 * evenHeader.Width / evenHeader.Height);
            //    evenHeader.Height = evenHeader.Height - 5;
            //}
            //else
            //{
            //    evenHeader.Width = evenHeader.Width + (5 * evenHeader.Width / evenHeader.Height);
            //    evenHeader.Height = evenHeader.Height + 5;
            //}

            //var oddHeader = sheet.HeaderFooter.OddHeader.InsertPicture(new FileInfo(headerPath), PictureAlignment.Left);
            //if (orientation == eOrientation.Portrait)
            //{
            //    oddHeader.Width = oddHeader.Width - (5 * oddHeader.Width / oddHeader.Height);
            //    oddHeader.Height = oddHeader.Height - 5;
            //}
            //else
            //{
            //    oddHeader.Width = oddHeader.Width + (5 * oddHeader.Width / oddHeader.Height);
            //    oddHeader.Height = oddHeader.Height + 5;
            //}

            //var evenFooter = sheet.HeaderFooter.EvenFooter.InsertPicture(new FileInfo(footerPath), PictureAlignment.Centered);
            //if (orientation == eOrientation.Portrait)
            //{
            //    evenFooter.Width = evenFooter.Width - (53 * evenFooter.Width / evenFooter.Height);
            //    evenFooter.Height = evenFooter.Height - 53;
            //}
            //else
            //{
            //    evenFooter.Width = evenFooter.Width - (50 * evenFooter.Width / evenFooter.Height);
            //    evenFooter.Height = evenFooter.Height - 50;
            //}

            //var oddFooter = sheet.HeaderFooter.OddFooter.InsertPicture(new FileInfo(footerPath), PictureAlignment.Centered);
            //if (orientation == eOrientation.Portrait)
            //{
            //    oddFooter.Width = oddFooter.Width - (53 * oddFooter.Width / oddFooter.Height);
            //    oddFooter.Height = oddFooter.Height - 53;
            //}
            //else
            //{
            //    oddFooter.Width = oddFooter.Width - (50 * oddFooter.Width / oddFooter.Height);
            //    oddFooter.Height = oddFooter.Height - 50;
            //}

            sheet.View.PageLayoutView = true;
            sheet.PrinterSettings.TopMargin = 2.4M / 2.54M;
            sheet.PrinterSettings.Orientation = orientation;
            sheet.PrinterSettings.PaperSize = pagerSize;
        }

        public static void AddHeaderAndFooter(ExcelWorksheet sheet, string imgHeaderPath, string imgFooterPath, int addHeightHeader, int addHeightFooter, PictureAlignment headerAlign, PictureAlignment footerAlign, eOrientation orientation = eOrientation.Landscape, ePaperSize pagerSize = ePaperSize.A4)
        {
            var headerPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, imgHeaderPath);
            var footerPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, imgFooterPath);

            // TODO: Check this later.
            //var evenHeader = sheet.HeaderFooter.EvenHeader.InsertPicture(new FileInfo(headerPath), headerAlign);
            //evenHeader.Width = evenHeader.Width + (addHeightHeader * evenHeader.Width / evenHeader.Height);
            //evenHeader.Height = evenHeader.Height + addHeightHeader;

            //var oddHeader = sheet.HeaderFooter.OddHeader.InsertPicture(new FileInfo(headerPath), headerAlign);
            //oddHeader.Width = oddHeader.Width + (addHeightHeader * oddHeader.Width / oddHeader.Height);
            //oddHeader.Height = oddHeader.Height + addHeightHeader;

            //var evenFooter = sheet.HeaderFooter.EvenFooter.InsertPicture(new FileInfo(footerPath), footerAlign);
            //evenFooter.Width = evenFooter.Width + (addHeightFooter * evenFooter.Width / evenFooter.Height);
            //evenFooter.Height = evenFooter.Height + addHeightFooter;

            //var oddFooter = sheet.HeaderFooter.OddFooter.InsertPicture(new FileInfo(footerPath), footerAlign);
            //oddFooter.Width = oddFooter.Width + (addHeightFooter * oddFooter.Width / oddFooter.Height);
            //oddFooter.Height = oddFooter.Height + addHeightFooter;

            sheet.View.PageLayoutView = true;
            sheet.PrinterSettings.TopMargin = 2.4M / 2.54M;
            sheet.PrinterSettings.Orientation = orientation;
            sheet.PrinterSettings.PaperSize = pagerSize;
        }

        public static void AddFooter(ExcelWorksheet sheet, string imgFooterPath, int addHeightFooter, PictureAlignment footerAlign, eOrientation orientation = eOrientation.Landscape, ePaperSize pagerSize = ePaperSize.A4)
        {
            var footerPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, imgFooterPath);

            // TODO: Check this later.
            //var evenFooter = sheet.HeaderFooter.EvenFooter.InsertPicture(new FileInfo(footerPath), footerAlign);
            //evenFooter.Width = evenFooter.Width + (addHeightFooter * evenFooter.Width / evenFooter.Height);
            //evenFooter.Height = evenFooter.Height + addHeightFooter;

            //var oddFooter = sheet.HeaderFooter.OddFooter.InsertPicture(new FileInfo(footerPath), footerAlign);
            //oddFooter.Width = oddFooter.Width + (addHeightFooter * oddFooter.Width / oddFooter.Height);
            //oddFooter.Height = oddFooter.Height + addHeightFooter;

            sheet.View.PageLayoutView = true;
            sheet.PrinterSettings.TopMargin = 2.4M / 2.54M;
            sheet.PrinterSettings.Orientation = orientation;
            sheet.PrinterSettings.PaperSize = pagerSize;
        }

        public static string ColumnIndexToColumnLetter(int colIndex)
        {
            int div = colIndex;
            string colLetter = String.Empty;
            int mod = 0;

            while (div > 0)
            {
                mod = (div - 1) % 26;
                colLetter = (char)(65 + mod) + colLetter;
                div = (int)((div - mod) / 26);
            }
            return colLetter;
        }

        private static void CreateCell(ExcelRange cell, object value, ExcelHorizontalAlignment align, bool merge, Color? background,
            Color? color, float? size, bool bold = false, bool wrapText = false, bool autoFitColumn = true)
        {
            cell.Merge = merge;
            cell.Value = value;
            cell.Style.HorizontalAlignment = align;
            cell.Style.VerticalAlignment = ExcelVerticalAlignment.Center;
            cell.Style.Font.Bold = bold;
            cell.Style.Font.Name = "Arial";
            cell.Style.WrapText = wrapText;
            if (background != null)
            {
                var fill = cell.Style.Fill;
                fill.PatternType = ExcelFillStyle.Solid;
                fill.BackgroundColor.SetColor(background.Value);
            }
            if (color != null)
            {
                cell.Style.Font.Color.SetColor(color.Value);
            }
            if (size.HasValue)
            {
                cell.Style.Font.Size = size.Value;
            }
            else
            {
                cell.Style.Font.Size = 10;
            }
            if (autoFitColumn)
            {
                cell.AutoFitColumns();
            }
        }

        private static void CreateCell(ExcelRange cell, object value, ExcelHorizontalAlignment align, bool merge, Color? background,
           Color? color, float? size, string font, bool bold = false, bool wrapText = false, bool autoFitColumn = true)
        {
            cell.Merge = merge;
            cell.Value = value;
            cell.Style.HorizontalAlignment = align;
            cell.Style.VerticalAlignment = ExcelVerticalAlignment.Center;
            cell.Style.Font.Bold = bold;
            cell.Style.Font.Name = font;
            cell.Style.WrapText = wrapText;
            if (background != null)
            {
                var fill = cell.Style.Fill;
                fill.PatternType = ExcelFillStyle.Solid;
                fill.BackgroundColor.SetColor(background.Value);
            }
            if (color != null)
            {
                cell.Style.Font.Color.SetColor(color.Value);
            }
            if (size.HasValue)
            {
                cell.Style.Font.Size = size.Value;
            }
            else
            {
                cell.Style.Font.Size = 10;
            }
            if (autoFitColumn)
            {
                cell.AutoFitColumns();
            }
        }


        private static void CreateCellTable(ExcelRange cell, object value, ExcelHorizontalAlignment align, bool merge, Color? background,
            Color? color, float? size, bool bold = false, bool wrapText = false, bool autoFitColumn = true)
        {
            CreateCell(cell, value, align, merge, background, color, size, bold, wrapText, autoFitColumn: autoFitColumn);
            SetBorder(cell);
        }

        private static void SetBorder(ExcelRange range)
        {
            var border = range.Style.Border;
            border.Top.Style = border.Left.Style = border.Bottom.Style = border.Right.Style = ExcelBorderStyle.Thin;
        }

        #region HoangNH

        private static void SetBorder(CustomExcelStyle excelStyle, ExcelRange range)
        {
            var border = range.Style.Border;

            if (excelStyle.Border.HasValue)
            {
                border.Top.Style = excelStyle.Border.Value;
                border.Bottom.Style = excelStyle.Border.Value;
                border.Left.Style = excelStyle.Border.Value;
                border.Right.Style = excelStyle.Border.Value;
            }
            else
            {
                border.Top.Style = excelStyle.BorderTop.HasValue ? excelStyle.BorderTop.Value : ExcelBorderStyle.None;
                border.Bottom.Style = excelStyle.BorderBottom.HasValue ? excelStyle.BorderBottom.Value : ExcelBorderStyle.None;
                border.Left.Style = excelStyle.BorderLeft.HasValue ? excelStyle.BorderLeft.Value : ExcelBorderStyle.None;
                border.Right.Style = excelStyle.BorderRight.HasValue ? excelStyle.BorderRight.Value : ExcelBorderStyle.None;
            }
            if (excelStyle.BorderColor.HasValue)
            {
                border.Top.Color.SetColor(excelStyle.BorderColor.Value);
                border.Bottom.Color.SetColor(excelStyle.BorderColor.Value);
                border.Left.Color.SetColor(excelStyle.BorderColor.Value);
                border.Right.Color.SetColor(excelStyle.BorderColor.Value);
            }
            else
            {
                if (excelStyle.BorderTopColor.HasValue)
                {
                    border.Top.Color.SetColor(excelStyle.BorderTopColor.Value);
                }
                if (excelStyle.BorderBottomColor.HasValue)
                {
                    border.Bottom.Color.SetColor(excelStyle.BorderBottomColor.Value);
                }
                if (excelStyle.BorderLeftColor.HasValue)
                {
                    border.Left.Color.SetColor(excelStyle.BorderLeftColor.Value);
                }
                if (excelStyle.BorderRightColor.HasValue)
                {
                    border.Right.Color.SetColor(excelStyle.BorderRightColor.Value);
                }
            }
        }

        private static void CreateCell(ExcelRange cell, object value, CustomExcelStyle excelStyle)
        {
            cell.Merge = excelStyle.IsMerge;
            cell.Value = value;
            cell.Style.Font.Name = "Arial";
            cell.Style.Font.Bold = excelStyle.IsBold;
            cell.Style.Font.Italic = excelStyle.IsItalic;
            cell.Style.Font.UnderLine = excelStyle.IsUnderLine;
            cell.Style.Font.Size = excelStyle.FontSize.HasValue ? excelStyle.FontSize.Value : (float)10;
            if (!string.IsNullOrWhiteSpace(excelStyle.Formula))
            {
                cell.Formula = excelStyle.Formula;
            }

            if (excelStyle.Color.HasValue)
                cell.Style.Font.Color.SetColor(excelStyle.Color.Value);

            if (excelStyle.BackgroundColor.HasValue)
            {
                var fill = cell.Style.Fill;
                fill.PatternType = ExcelFillStyle.Solid;
                fill.BackgroundColor.SetColor(excelStyle.BackgroundColor.Value);
            }

            cell.Style.HorizontalAlignment = excelStyle.HorizontalAlign.HasValue ? excelStyle.HorizontalAlign.Value : ExcelHorizontalAlignment.Center;
            cell.Style.VerticalAlignment = excelStyle.VerticleAlign.HasValue ? excelStyle.VerticleAlign.Value : ExcelVerticalAlignment.Center;

            if (excelStyle.IsWrapText.HasValue)
            {
                cell.Style.WrapText = excelStyle.IsWrapText.Value;
            }
            if (!excelStyle.AutoFit.HasValue || excelStyle.AutoFit.Value)
            {
                cell.AutoFitColumns();
            }

            if (!string.IsNullOrEmpty(excelStyle.NumberFormat))
                cell.Style.Numberformat.Format = excelStyle.NumberFormat;
            cell.Calculate();
            SetBorder(excelStyle, cell);
        }


        public static void CreateCellTable(ExcelWorksheet sheet, string range, object value, CustomExcelStyle excelStyle)
        {
            ExcelRange cellRange = sheet.Cells[range];
            CreateCell(cellRange, value, excelStyle);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int fromRow, int fromCol, int toRow, int toCol, object value, CustomExcelStyle excelStyle)
        {
            CreateCell(sheet.Cells[fromRow, fromCol, toRow, toCol], value, excelStyle);
        }

        public static void CreateCellTable(ExcelWorksheet sheet, int row, int col, object value, CustomExcelStyle excelStyle)
        {
            CreateCell(sheet.Cells[row, col], value, excelStyle);
        }

        public static void CreateColumnAutofit(ExcelWorksheet sheet, int[] columnFitArray)
        {
            foreach (int item in columnFitArray)
            {
                sheet.Column(item).AutoFit();
            }
        }
        #endregion
    }

    public class CustomExcelStyle
    {
        public ExcelBorderStyle? Border { get; set; }
        public ExcelBorderStyle? BorderTop { get; set; }
        public ExcelBorderStyle? BorderBottom { get; set; }
        public ExcelBorderStyle? BorderLeft { get; set; }
        public ExcelBorderStyle? BorderRight { get; set; }
        public Color? Color { get; set; }

        public Color? BorderColor { get; set; }
        public Color? BorderTopColor { get; set; }
        public Color? BorderBottomColor { get; set; }
        public Color? BorderLeftColor { get; set; }
        public Color? BorderRightColor { get; set; }

        public float? FontSize { get; set; }
        public ExcelHorizontalAlignment? HorizontalAlign { get; set; }
        public ExcelVerticalAlignment? VerticleAlign;
        public bool IsMerge { get; set; }
        public Color? BackgroundColor { get; set; }
        public bool IsBold { get; set; }
        public bool IsItalic { get; set; }
        public bool IsUnderLine { get; set; }
        public bool? AutoFit { get; set; }
        public bool? IsWrapText { get; set; }
        public string NumberFormat { get; set; }
        public string Formula { get; set; }
    }
}
