<?php

namespace Crevax\UserBundle\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class UserControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/user/');

        $this->assertTrue($crawler->filter('html:contains("Hello world!")')->count() > 0);
    }
}
