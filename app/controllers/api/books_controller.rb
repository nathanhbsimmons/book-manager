class Api::BooksController < ApplicationController
  def index
    book = Book.all.order(:author)
    render json: book
  end

  def create
    book = Book.create!(book_params)
    if book
      render json: book
    else
      render json: book.errors
    end
  end

  def show
    if book
      render json: book
    else
      render json: book.errors
    end
  end

  def destroy
    book&.destroy
    render json: { message: 'Book deleted!' }
  end

  private

  def book_params
    params.permit(:isbn, :title, :author, :illustrator, :edition, :notes_description)
  end

  def book
    @book ||= Book.find(params[:id])
  end
end
