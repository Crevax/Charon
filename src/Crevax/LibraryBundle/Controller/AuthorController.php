<?php

namespace Crevax\LibraryBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use Crevax\LibraryBundle\Entity\Author;
use Crevax\LibraryBundle\Form\Type\AuthorType;

class AuthorController extends Controller
{
  public function indexAction()
  {
    $authors = $this->getDoctrine()
      ->getRepository('CrevaxLibraryBundle:Author')
      ->findAll();

    return $this->render('CrevaxLibraryBundle:Author:index.html.twig', array(
      'authors' => $authors
    ));
  }

  public function newAction(Request $request)
  {
    $author = new Author();
    $form = $this->createForm(new AuthorType(), $author);

    $form->handleRequest($request);

    if( $form->isValid() ) {
      $em = $this->getDoctrine()->getManager();
      $em->persist($author);
      $em->flush();

      $this->get('session')->getFlashBag()->add(
       'success',
        "Author was added successfully!"
      );
      return $this->redirect($this->generateUrl('crevax_library_author_index'));
    }
    return $this->render('CrevaxLibraryBundle:Author:new.html.twig', array(
      'form' => $form->createView(),
    ));
  }
}
