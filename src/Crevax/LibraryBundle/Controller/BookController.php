<?php

namespace Crevax\LibraryBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use Crevax\LibraryBundle\Entity\Book;
use Crevax\LibraryBundle\Form\Type\BookType;

class BookController extends Controller
{
  public function indexAction()
  {
    $books = $this->getDoctrine()
      ->getRepository('CrevaxLibraryBundle:Book')
      ->findAll();

    return $this->render('CrevaxLibraryBundle:Book:index.html.twig', array(
      'books' => $books
    ));
  }

  public function newAction(Request $request)
  {
    $book = new Book();
    $form = $this->createForm(new BookType(), $book);

    $form->handleRequest($request);

    if( $form->isValid() ) {
      $em = $this->getDoctrine()->getManager();
      $em->persist($book);
      $em->flush();

      $this->get('session')->getFlashBag()->add(
       'success',
        "Book was added successfully!"
      );
      return $this->redirect($this->generateUrl('crevax_library_book_index'));
    }
    return $this->render('CrevaxLibraryBundle:Book:new.html.twig', array(
      'form' => $form->createView(),
    ));
  }
}
